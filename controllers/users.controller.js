try{
    //un objeto para guardar users
    let userController = {};
    userController.addUser = async (req, res) => {
        //se conecta con mysql
        if(connection){
            await connection.query(
                //aqui estamos pidiendo a msql los datos y concatenandolos
                "INSERT INTO users(US_name, Us_email, UID) VALUES('"+req.body.US_name +"','"+req.body.US_email+"', '"+req.body.US_UID+"' );",
                (error, rows) =>{
                    if(error){
                        res.status(500).json('error interno');
                    }else{
                        res.status(200).json(rows);
                        
                    }
                }
            );
        }
    };
    module.exports = userController;
}catch(err){

}