import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cliente{
    nome: string;
    cpf: string;
    rg: string;
    data_nasc: string;
    fone: string;
}

const Tela_cadastro_cliente: React.FC = () => {
    const{
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Cliente>();

    const enviar = async (dados: Cliente)=>{
        try{
            const cliente_existe = await AsyncStorage.getItem("clientes");
            let clientes = [];
            if(cliente_existe){
                clientes = JSON.parse(cliente_existe);
            }

            const novo_cliente = {...dados, id: Date.now() };
            clientes.push(novo_cliente);

            await AsyncStorage.setItem("clientes", JSON.stringify(clientes));
            console.log("Cliente salvo corretamente");
            reset()
        }
        catch(error){
            console.log("Erro no salvamento: " + error);
        }
    }

    return(
        <View style={styles.container}>
            
            <Text style ={styles.label}>Nome completo:</Text>
            <Controller
                control={control}
                name="nome"
                rules={{required:"Nome é obrigatório"}}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style = {styles.input}
                        placeholder="Digite o nome completo"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.nome && <Text>{errors.nome.message}</Text>}

            <Text style ={styles.label}>CPF:</Text>
            <Controller
                control={control}
                name="cpf"
                rules={{required:"CPF é obrigatório"}}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style = {styles.input}
                        placeholder="Digite o CPF"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.cpf && <Text>{errors.cpf.message}</Text>}
            
            <Text style ={styles.label}>RG:</Text>
            <Controller
                control={control}
                name="rg"
                rules={{required:"RG é obrigatório"}}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style = {styles.input}
                        placeholder="Digite o RG"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.rg && <Text>{errors.rg.message}</Text>}

            <Text style ={styles.label}>Data de nascimento:</Text>
            <Controller
                control={control}
                name="data_nasc"
                rules={{required:"Data de nascimento é obrigatória"}}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style = {styles.input}
                        placeholder="Digite a data de nascimento"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.data_nasc && <Text>{errors.data_nasc.message}</Text>}

            <Text style ={styles.label}>Telefone:</Text>
            <Controller
                control={control}
                name="fone"
                rules={{required:"Telefone é obrigatório"}}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style = {styles.input}
                        placeholder="Digite o num. de telefone"
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.fone && <Text>{errors.fone.message}</Text>}
            
            <Button title="Enviar" onPress={handleSubmit(enviar)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    }
})

export default Tela_cadastro_cliente