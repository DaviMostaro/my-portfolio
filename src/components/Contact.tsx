"use client";

import { ContactItem } from "./ContactItem";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactsIcon from '@mui/icons-material/Contacts';

export const Contact = () => {
    return (
        <div className="bg-gray-900 rounded-2xl max-w-7xl mx-auto mt-20 flex flex-row p-20 max-lg:flex-col max-lg:items-center max-lg:p-10 max-md:mt-10">
            <div className="w-1/2 flex flex-col justify-center items-center max-lg:w-full max-lg:mb-10">
                <h1 className="text-3xl mb-5 max-md:text-2xl">Contatos <ContactsIcon /></h1>
                <p className="max-md:text-sm max-md:px-4">Entre em contato atráves de qualquer uma dessas redes sociais que irei responder o mais rápido possivel!</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center max-lg:w-full">
                <ContactItem icon={<GitHubIcon />} label="Github" link="https://github.com/DaviMostaro"/>
                <ContactItem icon={<LinkedInIcon />} label="Linkedin" link="https://www.linkedin.com/in/davi-mostaro-05a569361/"/>
                <ContactItem icon={<EmailIcon />} label="Gmail" link="https://mail.google.com/mail/u/0/?fs=1&to=davimostaroprofissional@gmail.com&tf=cm"/>
                <ContactItem icon={<WhatsAppIcon />} label="WhatsApp" link="https://wa.me/5532985144918?text=Olá%2C+vi+seu+portfólio+e+gostaria+de+conversar."/>
            </div>
        </div>
    );
}