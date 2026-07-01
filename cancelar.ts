interface Consulta {
    id: number;
    paciente: string;
    profissional: string;
    data: string;
    horario: string;
}

class AgendaConsultas {
    private consultas: Consulta[] = [
        {
            id: 1,
            paciente: "João Silva",
            profissional: "Dra. Ana",
            data: "2026-08-20",
            horario: "09:00"
        },
        {
            id: 2,
            paciente: "Maria Souza",
            profissional: "Dr. Carlos",
            data: "2026-08-20",
            horario: "10:00"
        }
    ];

    public listarConsultas(): void {
        if (this.consultas.length === 0) {
            console.log("Nenhuma consulta agendada.");
            return;
        }

        console.log("=== CONSULTAS AGENDADAS ===");

        this.consultas.forEach(consulta => {
            console.log(`
ID: ${consulta.id}
Paciente: ${consulta.paciente}
Profissional: ${consulta.profissional}
Data: ${consulta.data}
Horário: ${consulta.horario}
-----------------------------
`);
        });
    }

    public cancelarConsulta(id: number): void {
        const indice = this.consultas.findIndex(
            consulta => consulta.id === id
        );

        if (indice === -1) {
            console.log("Consulta não encontrada.");
            return;
        }

        const consultaCancelada = this.consultas[indice];

        this.consultas.splice(indice, 1);

        console.log(
            `Consulta de ${consultaCancelada.paciente} cancelada com sucesso!`
        );
    }
}

const agenda = new AgendaConsultas();

agenda.listarConsultas();

agenda.cancelarConsulta(1);

agenda.listarConsultas();