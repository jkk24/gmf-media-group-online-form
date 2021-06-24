module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use.",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cell: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirmed: {
      type: DataTypes.STRING,
      defaultValue: "false",
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allowNull: false,
    },
  });

  return user;
};
