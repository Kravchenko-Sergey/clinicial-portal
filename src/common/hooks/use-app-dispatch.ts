import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/services'

export const useAppDispatch = () => useDispatch<AppDispatch>()
