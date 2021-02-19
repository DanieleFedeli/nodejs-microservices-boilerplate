module.export.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable('tableName', {
    id: {
      allowNull: false,
      autoIncremenet: true,
      primaryKey: true,
      type: DataTypes.Integer.UNSIGNED
    },
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE },
    deletedAt: { allowNull: true, type: DataTypes.DATE }
  }, { chartset: "utf8" })
}