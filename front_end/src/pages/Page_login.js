import React ,{ Component } from 'react'
// import { FormButton, FormTitle, Input ,FormContainer, ButtonsContainer, AuthContainer} from '../components/GlobalStyles/FormStyles.js'
// import { PageContainer } from '../components/GlobalStyles/PageStyles'
export class Login extends Component {
    render(){
        return (
            <div class="max-w-md px-3 rounded-lg mx-auto overflow-hidden mt-4 bg-gray-200">
                <h1 class="w-full px-4 mb-2 rounded border py-4  text-center text-4xl">LOGIN</h1>
                <div class="flex flex-col mt-2 mb-5">
                    <div class="relative"/>
                        <h2 class="text-sm text-rigth font-semibold">Email</h2>
                        <input type="text" name="email" class="w-full px-4 mb-3 rounded border py-2" placeholder="Email..."/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute bottom-5 right-5 inline w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
               
                    <div class="relative mb-3"/>
                        <h2 class="text-sm text-rigth font-semibold">Password</h2>
                        <input type="text" name="password" class="w-full px-4 mb-3 rounded border py-2" placeholder="Password..."/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute bottom-5 right-5 inline w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    <div class="relative mb-3"/>
                        <button type="submit" class="py-1 mb-3 px-3 rounded text-white bg-blue-500 shadow-lg shadow-blue-500/50">Login</button>
                        <a href="" class="text-sm text-rigth font-semibold text-blue-500">Forgot Password?</a>
                        <p class="text-sm text-rigth font-semibold"> Don't have an accounts <a href="" class="text-sm text-rigth font-semibold text-red-500"> Register </a> nows</p>
                </div>
            </div>
        )
    }
}
export default Login;


    // const navigate = useNavigate()

    // const [login] = useLazyQuery(LOGIN_USER, {
    //     fetchPolicy: 'network-only',
    //     onCompleted: res => {
    //         let user = res.login
    //         localStorage.setItem('user', JSON.stringify(user))
    //         setTimeout(() => {
    //             user.isManager ?
    //                 window.location.href = '/dashboard' :
    //                 window.location.href = '/'
    //         }, 1000);
    //     },
    //     onError: err => {
    //         setLoading(false)
    //         toast.error(err.message, {
    //             autoClose: 5500,
    //             pauseOnHover: true
    //         })
    //     }
    // })

    // const [data, setdata] = useState({
    //     email: '',
    //     password: ''
    // })

    // const [loading, setLoading] = useState(false)

    // const userLogin = async (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     login({
    //         variables: {
    //             email: data.email,
    //             password: data.password
    //         }
    //     })
    // }
