
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'


export const useAuth = ({ onlyAdmin, setloadPageData } = {}) => {

    const [cookies, setCookie, removeCookie] = useCookies(['Jwt']);
    

    const router = useRouter()

    const reRoute = (UserData) => {

        if(!UserData) UserData  = cookies.UserData;

        if(!UserData && router.pathname == '/login') return;

        if(onlyAdmin == null && !(UserData && router.pathname == '/login')) return;

        if ((onlyAdmin || onlyAdmin==null) && UserData.user_type !== 2) {

            router.push('/profile')
            return

        }

        if (!onlyAdmin && UserData.user_type == 2) {

            router.push('/Dashboard')
            return
        }


    }

    const ReSetSession = async () => {


        fetch({ url: `${process.env.BACK_END_DEV}/ReSetSession`, method: "POST", data: {} })
            .then(({ data }) => {
                setSession(data)

                router.reload(window.location.pathname)

            })
            .catch(
                err => {
                    router.push('/login')
                }
            )
    }

    const setSession = (data) => {

        setCookie('Jwt', data.Jwt, { path: '/' });
        setCookie('UserData', data.UserData, { path: '/' });


    }

    const logOut = async () => {
        csrf()

        await fetch({ url: `${process.env.BACK_END_DEV}/api/logout`, method: 'POST', data: { data: "s" } })
            .then(data => {
                removeCookie('Jwt')
                removeCookie('UserData')
                router.push('/')
            })
            .catch()


    }

    useEffect(() => {

        if (!cookies.Jwt || !cookies.UserData) {

            ReSetSession();
            return
        }

        reRoute();

        setloadPageData(false)


    }, [])

   // var csrf = async () => await fetcher({ url: "/sanctum/csrf-cookie", method: "GET" })

    return { setSession, logOut ,reRoute}

}