interface Consulta {
    id: number;
    paciente: string;
    profissional: string;
    data: string;
    horario: string;
}

class SistemaAgendamento {
    private consultas: Consulta[] = [];

    agendar(
        paciente: string,
        profissional: string,
        data: string,
        horario: string
    ): void {

    
        if (!paciente || !profissional || !data || !horario) {
            console.log("Todos os campos são obrigatórios.");
            return;
        }

   
        const conflito = this.consultas.find(c =>
            c.profissional === profissional &&
            c.data === data &&
            c.horario === horario
        );

        if (conflito) {
            console.log("Este profissional já possui consulta nesse horário.");
            return;
        }

        const consulta: Consulta = {
            id: Date.now(),
            paciente,
            profissional,
            data,
            horario
        };

        this.consultas.push(consulta);

        console.log("Consulta agendada com sucesso!");
    }

    listarConsultas(): void {

        if (this.consultas.length === 0) {
            console.log("Nenhuma consulta cadastrada.");
            return;
        }

        console.log("\n===== CONSULTAS AGENDADAS =====");

        this.consultas.forEach(c => {
            console.log(`
ID: ${c.id}
Paciente: ${c.paciente}
Profissional: ${c.profissional}
Data: ${c.data}
Horário: ${c.horario}
------------------------------
`);
        });

    }

    cancelarConsulta(id: number): void {

        const indice = this.consultas.findIndex(c => c.id === id);

        if (indice === -1) {
            console.log("Consulta não encontrada.");
            return;
        }

        this.consultas.splice(indice, 1);

        console.log("Consulta cancelada com sucesso!");
    }
}


const sistema = new SistemaAgendamento();

sistema.agendar(
    "João Silva",
    "Dra. Ana",
    "2026-08-20",
    "09:00"
);

sistema.agendar(
    "Maria Souza",
    "Dra. Ana",
    "2026-08-20",
    "10:00"
);

sistema.agendar(
    "Carlos Lima",
    "Dra. Ana",
    "2026-08-20",
    "09:00"
);

sistema.listarConsultas();
