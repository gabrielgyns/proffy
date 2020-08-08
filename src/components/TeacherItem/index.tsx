import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: { id, avatar, bio, cost, name, subject, whatsapp} }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p>{bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {cost}</strong>
                </p>
                <a
                    href={`https://wa.me/${whatsapp}?text=Eu%20tenho%20interesse%20em%20estudar%20com%20você%20(Proffy)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={createNewConnection}
                >
                    <img src={WhatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;