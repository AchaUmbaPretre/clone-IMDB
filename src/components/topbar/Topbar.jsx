import { PersonPin } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './topbar.scss'

function Topbar() {
  return (
    <>
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <Link to={'/'}><span href="" className="logo-top">IMDB</span></Link>
                    <ul className="topbar-ul">
                        <Link to={'/movies/popular'} className="topbar-li">Popular</Link>
                        <Link to={'/movies/top-rated'} className="topbar-li">Top rated</Link>
                        <Link to={'/movies/upcoming'} className="topbar-li">Upcoming</Link>
                    </ul>
                </div>
                <div className="topbar-right">
                    <PersonPin className='Icon-topbar' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar