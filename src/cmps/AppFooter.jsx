
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

// // import { removeFromCart, checkout } from '../store/story.actions'
// import {  checkout } from '../store/story.actions'
// import { UserMsg } from './UserMsg.jsx'

// export function AppFooter() {
//     const [isCartShown, setIsCartShown] = useState(false)
//     const storyt = useSelector(storeState => storeState.storyModule.storyt)
//     const count = useSelector(storeState => storeState.userModule.count)
//     const storytTotal = storyt.reduce((acc, story) => acc + story.price, 0)

//     async function onCheckout() {
//         try {
//             const score = await checkout(storytTotal)
//             showSuccessMsg(`Charged, your new score: ${score.toLocaleString()}`)
//         } catch(err) {
//             showErrorMsg('Cannot checkout')
//         }
//     }

//     return (
//         <footer className="app-footer">
//             <p>
//                 coffeerights - count: {count}
//             </p>
//             {storyt.length > 0 &&
//                 <h5>
//                     <span>{storyt.length}</span> Products in your Cart
//                     <button className="btn-link" onClick={(ev) => {
//                         ev.preventDefault();
//                         setIsCartShown(!isCartShown)
//                     }}>
//                         ({(isCartShown) ? 'hide' : 'show'})
//                     </button>
//                 </h5>
//             }

//             {isCartShown && storyt.length > 0 && <section className="storyt" >
//                 <h5>Your Cart</h5>
//                 <ul>
//                     {
//                         storyt.map((story, idx) => <li key={idx}>
//                             <button onClick={() => {
//                                 removeFromCart(story._id)
//                             }}>x</button>
//                             {story.vendor}
//                         </li>)
//                     }
//                 </ul>
//                 <p>Total: ${storytTotal.toLocaleString()} </p>
//                 <button onClick={onCheckout}>Checkout</button>
//             </section>}
//             <UserMsg />
//         </footer>
//     )
// }

