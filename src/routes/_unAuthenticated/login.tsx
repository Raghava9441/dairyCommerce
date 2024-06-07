import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { AuthAPI } from '../../api/AuthAPI';
import { LocalStorage } from '../../utils/localStorage';

export const Route = createFileRoute('/_unAuthenticated/login')({
    validateSearch: z.object({
        redirect: z.string().optional(),
    }),
    component: Login,
});

const schema = z.object({
    password: z.string().min(6),
    username: z.string().min(3),
});

function Login() {
    const navigate = useNavigate();
    const search = Route.useSearch();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm();

    const onSubmit = (data: any) => {
        schema.parse(data);
        AuthAPI.Login(data, true)
            .then((result) => {
                LocalStorage.set('current-user', result.data);
                reset();
                // navigate({ to: "/profile" })
                console.log(search.redirect);
                if (search.redirect) {
                    router.history.push(search.redirect);
                } else {
                    navigate({ to: '/profile' });
                }
            })
            .catch((error) => {
                if (error instanceof ZodError) {
                    error.errors.forEach((err) => {
                        setError(err.path.join('.'), { message: err.message });
                    });
                } else {
                    console.log('Error registering user:', error.response.data.message);
                }
            });
    };

    return (
        <>
            <Container maxWidth="xs">
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Username"
                            {...register('username', {
                                required: 'Username is required',
                            })}
                            error={!!errors.username}
                            helperText={errors.username?.message as ReactNode}
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
                    </Box>
                    <Button sx={{ marginTop: 2 }} variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                    <Button
                        sx={{ marginTop: 2, marginLeft: 5 }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => navigate({ to: '/register' })}
                    >
                        Register
                    </Button>
                </form>
            </Container>
        </>
    );
}
