import axios from '../utils/request'
import qs from 'qs'
let user = {
    login(data) {
        return axios({
            url: '/admin/Index/login',
            method: 'post',
            data: qs.stringify(data)
        })
    }

}

export default user