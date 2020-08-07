import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import WarningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);

        scheduleItems.push();
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input label="Nome completo" name="name" autoComplete="off" />
                    <Input label="Avatar" name="avatar" autoComplete="off" />
                    <Input label="WhatsApp" name="whatsapp" autoComplete="off" />
                    <Textarea label="Biografia" name="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        label="Matéria"
                        name="subject"
                        autoComplete="off"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Programming', label: 'Programming' },
                        ]}
                    />
                    <Input label="Custo da sua hora por aula" name="cost" autoComplete="off" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    

                    {
                        scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        label="Dia da semana"
                                        name="week_day"
                                        autoComplete="off"
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda' },
                                            { value: '2', label: 'Terça' },
                                            { value: '3', label: 'Quarta' },
                                            { value: '4', label: 'Quinta' },
                                            { value: '5', label: 'Sexta' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input label="Das" name="from" type="time" />
                                    <Input label="Ás" name="to" type="time" />
                                </div>
                            );
                        })
                    }
                </fieldset>

                <footer>
                    <p>
                        <img src={WarningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha todos os dados!
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;