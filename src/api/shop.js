import axios from '../utils/request'
import qs from 'qs'
let shop = {
    shoplist(data) {
        return axios({
            url: '/admin/index/shoplist',
            method: 'post',
            data: qs.stringify(data)
        })
    },

}

export default shop