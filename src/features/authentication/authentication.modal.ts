export interface RegisterUser {
    email: string;
    password: string;
    role: string;
    username: string;
}
export interface LoginUser {
    password: string;
    username: string;
}

export interface Avatar {
    url: string;
    localPath: string;
    _id: string;
}

export interface User {
    _id: string;
    avatar: Avatar;
    username: string;
    email: string;
    role: string;
    loginType: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface LoginData {
    user: User;
    accessToken: string;
    refreshToken: string;
}

interface LoginResponse {
    statusCode: number;
    data: LoginData;
    message: string;
    success: boolean;
}

export function MapToLoginResponse(apiResponse: any): LoginResponse {
    return {
        statusCode: apiResponse.statusCode,
        data: {
            user: {
                _id: apiResponse.data.user._id,
                avatar: {
                    url: apiResponse.data.user.avatar.url,
                    localPath: apiResponse.data.user.avatar.localPath,
                    _id: apiResponse.data.user.avatar._id,
                },
                username: apiResponse.data.user.username,
                email: apiResponse.data.user.email,
                role: apiResponse.data.user.role,
                loginType: apiResponse.data.user.loginType,
                isEmailVerified: apiResponse.data.user.isEmailVerified,
                createdAt: apiResponse.data.user.createdAt,
                updatedAt: apiResponse.data.user.updatedAt,
                __v: apiResponse.data.user.__v,
            },
            accessToken: apiResponse.data?.accessToken,
            refreshToken: apiResponse.data?.refreshToken,
        },
        message: apiResponse.message,
        success: apiResponse.success,
    };
}

// Example usage:
// const apiResponse = {
//     "statusCode": 200,
//     "data": {
//         "user": {
//             "_id": "65f49759a4e46ccf2ef8f6f4",
//             "avatar": {
//                 "url": "https://via.placeholder.com/200x200.png",
//                 "localPath": "",
//                 "_id": "65f49759a4e46ccf2ef8f6f3"
//             },
//             "username": "doejohn",
//             "email": "user.email@domain.com",
//             "role": "ADMIN",
//             "loginType": "EMAIL_PASSWORD",
//             "isEmailVerified": false,
//             "createdAt": "2024-03-15T18:45:45.220Z",
//             "updatedAt": "2024-03-15T19:13:03.004Z",
//             "__v": 0
//         },
//         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
//         "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
//     },
//     "message": "User logged in successfully",
//     "success": true
// };
