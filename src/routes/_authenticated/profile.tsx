import { Button } from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { LocalStorage } from '../../utils/localStorage';
import { useEffect, useState } from 'react';
import { ProfileAPI } from '../../api/ProfileAPI';
import { MapProfile, UserProfile } from '../../features/profile/profile.modal';

export const Route = createFileRoute('/_authenticated/profile')({
    component: Profile,
});

function Profile() {
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);
    const [profile, setProfile] = useState<UserProfile>();

    useEffect(() => {
        setLoading(true);
        ProfileAPI.getProfile(true)
            .then((result) => {
                setProfile(MapProfile(result.data));
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleLogOut = () => {
        LocalStorage.remove('current-user');
        navigate({ to: '/login' });
    };

    return (
        <div>
            <h1>Profile</h1>
            {Loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {profile && (
                        <div>
                            <h1>{profile.FirstName}</h1>
                            <h2>{profile.Email}</h2>
                            <h2>{profile.LastName}</h2>
                        </div>
                    )}
                </div>
            )}
            <Button onClick={handleLogOut} color='error' variant='contained'>LogOut</Button>
            <Button onClick={() => navigate({ to: '/' })} color='error' variant='contained'>products</Button>
        </div>
    );
}
