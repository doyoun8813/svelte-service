import {writeable, get, writable} from 'svelte/store'
import { getApi, putApi, delApi, postApi } from "../service/api.js";
import { router } from 'tinro'
import {options} from "axios";

function setCurrentArticlesPage() {}
function setArticles() {}
function setLoadingArticle() {}
function setArticleContent() {}
function setComments() {}
function setAuth() {
    let initValues = {
        id: '',
        email: '',
        Authorizatino: '',
    }

    const { subscribe, set, update } = writable({...initValues})

    const refresh = async () => {
        try{
            const authenticationUser = await postApi({path: '/auth/refresh'})
            set(authenticationUser)
            isRefresh.set(true)
        } catch (err){
            auth.resetUserInfo()
            isRefresh.set(false)
        }
    }
    const resetUserInfo = () => set({...initValues})
    const login = async (email, password) => {
        try {
            const Options = {
                path: '/auth/login',
                data: {
                    email: email,
                    pwd: password,
                }
            }

            const result = await postApi(options);
            set(result)
            isRefresh.set(true)
            router.goto('/articles')
        } catch(err){
            alert('오류가 발생했습니다. 로그인을 다시시도해주세요.');
        }
    }

    const logout = async () => {
        try{
            const options = {
                path: '/auth/logout'
            }
            await delApi(options);
            set({...initValues})
            isRefresh.set(false)
            router.goto('/')
        } catch (err){
            alert('오류가 발생했습니다. 다시 시도해주세요.')
        }
    }

    const register = async (email, pwd) => {
        try{
            const options = {
                path: '/auth/register',
                data: {
                    email: email,
                    pwd: pwd
                }
            }

            await postApi(options);
            alert('가입이 완료되었습니다.');
            router.goto('/login')
        } catch (err){
            alert('오류가 발생했습니다. 다시 시도해 주세요.');
        }
    }

    return {
        subscribe,
        refresh,
        login,
        logout,
        resetUserInfo,
        register,
    }
}
function setArticlesMode() {}
function setIsLogin() {}

export const currentArticlesPage = setCurrentArticlesPage()
export const articles = setArticles()
export const loadingArticle = setLoadingArticle()
export const articleContent = setArticleContent()
export const comments = setComments()
export const auth = setAuth()
export const articlesMode = setArticlesMode()
export const isLogin = setIsLogin()
export const isRefresh = writable(false)
