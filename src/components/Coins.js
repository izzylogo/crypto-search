import React, { useState } from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import Coin from '../routes/Coin';
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


const Coins = (props) => {
    let coinn = props.coins
    let light = props.light
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const coinsPerPage = 10
    const coinSeen = pageNumber * coinsPerPage
    const displayCoins = coinn
        .filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search))
        .slice(coinSeen, coinSeen + coinsPerPage)
        .map(coins => {
            return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                    <CoinItem coins={coins} light={light} />
                </Link>
            )
        })

    const pageCount = Math.ceil(100 / coinsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    // console.log(coinn.filter(coin => coin.name.toLowerCase().includes(search) || coin.id.toLowerCase().includes(search)) )

    const color = () => {

    }

  return (
    <div className='container'>
        <div>
            <form action="" className='find'>
                <input
                    type="text" 
                    placeholder='Search for a Crypto Currency' 
                    className='search' 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <div className={props.light ? 'heading-light' : 'heading'}>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24th</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Capital</p>
            </div>

            {displayCoins}
            <ReactPaginate
                previousLabel={<AiOutlineLeft />}
                nextLabel={<AiOutlineRight />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={props.light ? 'light-pagin' : 'paginationBtns'}
                previousLinkClassName={'previousBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
            />

            {/* {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                        <CoinItem coins={coins} />
                    </Link>
                )
            })} */}

        </div>
    </div>
  )
}

export default Coins