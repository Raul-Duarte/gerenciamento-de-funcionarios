import * as Yup from 'yup'
import Cargo from '../models/Cargo'


class CargoController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),

        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Erro no cadastro" })
        }

        const CargoExists = await Cargo.findOne({
            where: {
                name: req.body.name
            }
        })

        if (CargoExists) {
            return res.status(400).json({ error: 'Cargo existe' })
        }

        const { id, name } = await Cargo.create(req.body)

        return res.json({
            id,
            name,
        })

    }

    // async update(req, res) {

    //     const schema = Yup.object().shape({
    //         name: Yup.string(),
    //         email: Yup.string().email(),

    //     });

    //     if (!(await schema.isValid(req.body))) {
    //         return res.status(400).json({ error: "Erro ao fzer alteração" })
    //     }

    //     const { email } = req.body
    //     const id = req.params.id;

    //     const funcionario = await Funcionario.findByPk(id)

    //     if (email != funcionario.email) {
    //         const funcionarioExists = await Funcionario.findOne({
    //             where: {
    //                 email
    //             }
    //         })

    //         if (funcionarioExists) {
    //             return res.status(400).json({ error: 'Funcionario existe' })
    //         }
    //     }

    //     const { name } = await funcionario.update(req.body)

    //     return res.json({
    //         id,
    //         name,
    //         email
    //     })
    // }

    // async get(req, res){

    //     const funcionarioAll = await Funcionario.findAll()
    //     return res.json(funcionarioAll)
    // }
}


export default new CargoController()