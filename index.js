const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet = require('helmet');
const {swaggerUi,swaggerSpec} = require('./Config/Swagger');

require('dotenv').config();
const port = process.env.PORT_SERVER;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json())

const userRoutes = require('./Routes/crdtuserRoutes');
app.use('/users',userRoutes); 

const leaveRoutes = require('./Routes/crdtleaveRoutes')
app.use('/leaves',leaveRoutes)

const workRoutes = require('./Routes/crdtworkRoutes')
app.use('/works',workRoutes)

const workSumRoutes = require('./Routes/crdtworkMonthRoutes')
app.use('/worksum',workSumRoutes)


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`This's server running on ${port}`)
})