import * as Yup from 'yup'
import Funcionario from '../models/Funcionario'


class FuncionarioController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),

        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Erro no cadastro" })
        }

        const funcionarioExists = await Funcionario.findOne({
            where: {
                email: req.body.email
            }
        })

        if (funcionarioExists) {
            return res.status(400).json({ error: 'Funcionario existe' })
        }

        const { id, name, email } = await Funcionario.create(req.body)

        return res.json({
            id,
            name,
            email
        })

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
}


export default new FuncionarioController