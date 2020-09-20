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

        // const schema = Yup.object().shape({
        //     name: Yup.string(),

        // });

        // if (!(await schema.isValid(req.body))) {
        //     return res.status(400).json({ error: "Erro ao fzer alteração" })
        // }

        // const { name, surname, date, salary } = req.body
        const id = req.params.id;

        const funcionario = await Funcionario.findByPk(id)

        // if (name != funcionario.name) {
        //     const funcionarioExists = await Funcionario.findOne({
        //         where: {
        //             name
        //         }
        //     })

        //     if (funcionarioExists) {
        //         return res.status(400).json({ error: 'Funcionario existe' })
        //     }
        // }

        const func = await funcionario.update(req.body)

        return res.json(func)
    }

    async get(req, res) {

        const funcionarioAll = await Funcionario.findAll()
        return res.json(funcionarioAll)
    }

    async delete(req, res) {
        const id = req.params.id;

        const funcionarioDelete = await Funcionario.findByPk(id)
        
        await funcionarioDelete.destroy()
        // await funcionario.removeFuncionario(funcionarioDelete)
        return res.json()
    }

}


export default new FuncionarioController()