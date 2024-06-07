export interface UserProfileResponse {
    StatusCode: number;
    Data: UserProfile;
    Message: string;
    Success: boolean;
}
export interface UserProfile {
    Id: number;
    Username: string;
    Email: string;
    FirstName: string;
    LastName: string;
    Avatar: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export const MapProfile = (x: any): UserProfile => {
    return {
        Id: x.id,
        Username: x.username,
        Email: x.email,
        FirstName: x.firstName,
        LastName: x.lastName,
        Avatar: x.avatar,
        CreatedAt: x.createdAt,
        UpdatedAt: x.updatedAt,
    };
};
