import { z } from "zod";

export const FormSchema = z.object({
    name: z
        .string({ required_error: "Имя обязательно для заполнения" })
        .min(3, { message: "Имя должно содержать не менее 3 символов" }),

    phone: z
        .string({ required_error: "Телефон обязателен для заполнения" })
        .refine(
            (value) => {
                const digitsOnly = value.replace(/[\s()+-]/g, "");
                return (
                    digitsOnly.length >= 11 &&
                    digitsOnly.length <= 15 &&
                    digitsOnly.split("").every((char) => !isNaN(Number(char)))
                );
            },
            { message: "Некорректный формат телефона" },
        ),

    subject: z
        .string({ required_error: "Тема обязательна для заполнения" })
        .min(3, { message: "Тема должна содержать не менее 3 символов" }),

    message: z
        .string({ required_error: "Сообщение обязательно для заполнения" })
        .min(10, {
            message: "Сообщение должно содержать не менее 10 символов",
        }),

    email: z
        .string({ required_error: "Email обязателен для заполнения" })
        .email({ message: "Некорректный формат email" }),
});
