const pool = require('../config/database');

const getAPData = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE`');
    return rows;
  };


const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE `Id` = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

const addData = async (req, res, next) => {
  const {
    listHeader, description
  } = req.body;
  
  try {
    await pool.query(
      "INSERT INTO `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE` (`LIST_HEADERS`,`Description`) VALUES (?, ?)",
      [
        listHeader, description
      ]
    );
    
    res.send('Data was submitted successfully');
  } catch (err) {
    next(err);
    throw err;
  }
};

const deleteData = async (req, res, next) => {
  const Description = req.params.Description;
  try {
    await pool.query(
      "DELETE FROM `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE` WHERE `Description` = ?",
      [Description] 
    );
    res.send('Data was deleted successfully');
  } catch (err) {
    next(err);
    throw err;
  }
};
module.exports = { getData, updateData, addData, deleteData };
