import Axios from "axios"

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "41b93164-ac16-42f2-ac7d-3e3369427b3c" }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(Response => {
                return Response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)
    }

}


export const authAPI = {
    me(){
        return instance.get('auth/me')
    }
}


export default usersAPI