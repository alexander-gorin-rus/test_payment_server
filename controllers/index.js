const Card = require('../models/CardSchema');

exports.CreatePayment = async (req, res) => {
    try {
        // create variables in which later we store length of numbers
        let numbers;
        let cvv;

        // distructure numbers and CVV
        const {CardNumber, CVV} = req.body;

        // conver numbers to string and asign values to numbers and cvv
        numbers = CardNumber.toString().length
        cvv = CVV.toString().length
        
        // chech length of numbers
        if (numbers < 16 || numbers > 16) {
            res.status(500).json({
                error: 'Номер карты не должен быть не меннее или более 16'
            })
        // check length of cvv 
        } else if (cvv < 3 || cvv > 3){
            res.status(500).json({
                error: 'Количество знаков для CVV не должно быть не меннее или более 3'
            })
        } else {
            const payment = await new Card(req.body)
            .save();
            res.json({
                success: true,
                payment
            });
        }
    } catch (err) {
        return res
            .status(400)
            .json({ errors: [{ 
                msg: 'Ошибка при создании платежа' 
        }]});
    }
}

exports.GetPaymentData = async (req, res) => {
    try {
        const payments = await Card.find();
        if (!payments) {
            return res.status(404).json({
                message: 'Информация о платежах не найдена'
            })
        }
        res.status(200).json(payments)
    } catch (error) {
        return res
            .status(400)
            .json({ errors: [{ 
                msg: 'Ошибка при отображении платежей' 
        }]});
    }
}