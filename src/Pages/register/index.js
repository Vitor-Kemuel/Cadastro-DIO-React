import { MdEmail, MdLock, MdPeople } from 'react-icons/md'
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';

import { useForm } from "react-hook-form";


import {
    Container,
    Title,
    Column,
    TitleRegister,
    SubtitleRegister,
    JaTenhoText,
    LogarText,
    Row,
    Wrapper,
} from './styles';

const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        if (formData.name < 3) {
            errors.email = true;
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column variant={"secondary"}>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" leftIcon={<MdPeople />} name="name" control={control} />
                        {errors.email && <span>Nome é obrigatorio</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" control={control} />
                        {errors.password && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <JaTenhoText>Ja tenho conta</JaTenhoText>
                        <LogarText>Fazer login</LogarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }