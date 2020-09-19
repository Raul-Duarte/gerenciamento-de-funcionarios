// import * as Yup from 'yup'
import Funcionario from '../models/Funcionario'
import Cargo from '../models/Cargo'


class FuncionarioController {
    async store(req, res) {

        const { cargo_id } = req.params

        const { name, surname, date, salary } = req.body

        const cargoExists = await Cargo.findByPk(cargo_id)

        if (!cargoExists) {
            return res.status(400).json({ error: 'Cargo não existe' })
        }

        const funcionario = await Funcionario.create({
            name,
            surname,
            date,
            salary,
            cargo_id

        })

        return res.json(funcionario)

    }

    async update(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),

        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Erro ao fzer alteração" })
        }

        const { email } = req.body
        const id = req.params.id;

        const funcionario = await Funcionario.findByPk(id)

        if (email != funcionario.email) {
            const funcionarioExists = await Funcionario.findOne({
                where: {
                    email
                }
            })

            if (funcionarioExists) {
                return res.status(400).json({ error: 'Funcionario existe' })
            }
        }

        const { name } = await funcionario.update(req.body)

        return res.json({
            id,
            name,
            email
        })
    }

    async get(req, res) {

        const funcionarioAll = await Funcionario.findAll()
        return res.json(funcionarioAll)
    }
}


export default new FuncionarioController()