const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { user } = require("./db/models");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

const db = require("./db/models");

// Passport Config
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (username, password, done) => {
      user
        .findOne({
          where: {
            email: username,
          },
        })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              target: "email",
              message: "Email does not exist!",
            });
          }
          const dbPassword = user.password;
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
              return done(null, false, {
                message: "Password is incorrect!",
              });
            }
            return done(null, user, { message: "success" });
          });
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Session Setup
app.use(
  session({
    secret: "LOLXD",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routers
const userRouter = require("./routes/user");
app.use("/user", userRouter);
const orderRouter = require("./routes/order");
app.use("/order", orderRouter);

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server is now running on port 8080!");
  });
});
