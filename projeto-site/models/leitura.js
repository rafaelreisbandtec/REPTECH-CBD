'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		Identificador: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		Media_Temp: {
			type: DataTypes.REAL,
			allowNull: false
		},
		Media_Umid: {
			type: DataTypes.REAL,
			allowNull: false
		},
		Data_Hora: {
			type: DataTypes.DATE,
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'TB_EVENTOS', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
