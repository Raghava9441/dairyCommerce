import { Link, Navigate, createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import React, { ReactNode, useReducer } from 'react';
import { TextField, Button, Container, Typography, CircularProgress, MenuItem, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { AuthAPI } from '../../api/AuthAPI';
import { ApiErrorResponse } from '../../api/configs/axiosConfigs';

export const Route = createFileRoute('/_unAuthenticated/register')({
    component: Register,
});

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(3),
    role: z.enum(['USER', 'ADMIN']),
});

type Action =
    | { type: 'SET_FIELD'; field: string; value: string }
    | { type: 'SET_LOADING'; loading: boolean }
    | { type: 'SET_ERROR'; error: string | null }
    | { type: 'SET_SUCCESS'; success: boolean }
    | { type: 'RESET_FORM' };

interface State {
    email: string;
    password: string;
    role: string;
    username: string;
    loading: boolean;
    error: string | null;
    success: boolean;
}
const initialState: State = {
    email: '',
    password: '',
    role: 'ADMIN',
    username: '',
    loading: false,
    error: null,
    success: false,
};
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'SET_LOADING':
            return { ...state, loading: action.loading };
        case 'SET_ERROR':
            return { ...state, error: action.error };
        case 'SET_SUCCESS':
            return { ...state, success: action.success };
        case 'RESET_FORM': // Handle form reset
            return { ...initialState };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

function Register() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm();

    const onSubmit = (data: any) => {
        schema.parse(data);
        AuthAPI.RegisterUser(data, true)
            .then((result) => {
                reset();
            })
            .catch((error) => {
                if (error instanceof ZodError) {
                    error.errors.forEach((err) => {
                        setError(err.path.join('.'), { message: err.message });
                    });
                } else {
                    console.log(error.response.message);
                }
            });
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message as ReactNode}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message as ReactNode}
                    />
                    <TextField
                        label="Username"
                        {...register('username', {
                            required: 'Username is required',
                        })}
                        error={!!errors.username}
                        helperText={errors.username?.message as ReactNode}
                    />
                    <TextField select label="Role" defaultValue="USER" {...register('role')} fullWidth>
                        <MenuItem value="USER">User</MenuItem>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                    </TextField>
                </Box>
                <Button sx={{ marginTop: 2 }} variant="contained" color="primary" type="submit">
                    Register
                </Button>
                <Button
                    sx={{ marginTop: 2, marginLeft: 5 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => navigate({ to: '/login' })}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}
export default Register;
