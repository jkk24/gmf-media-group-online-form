const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { user } = require("./db/models");
require("dotenv").config;

app.use(express.json());
const corsOptions = {
  origin: process.env.BASE_URL || "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  // server static content
  // npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

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
    secret: "secret",
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

app.get("/*", (req, res) => {
  const url = path.join(__dirname, "client/build", "index.html");
  res.sendFile(url);
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server is now running on port 8080!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
