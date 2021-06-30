module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: {
        args: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.STRING,
      defaultValue: "PENDING",
      allowNull: false,
    },
    user_approval: {
      type: DataTypes.STRING,
      defaultValue: "false",
      allowNull: false,
    },
    printing_options: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    type_of_ad: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    digital_services: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    advertising_duration: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(),
      defaultValue: "IN-PROGRESS",
      allowNull: false,
    },
  });

  return order;
};