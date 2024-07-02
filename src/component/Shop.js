import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  // const action = bindActionCreators(actionCreators,dispatch)
  const {withdwawMoney, depositeMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <>
      <div className="container">
        <h1> Sports Shoes</h1>
        {/* <button className="btn btn-primary mx-3" onClick={() => {dispatch(actionCreators.withdwawMoney(100))}}>-</button>
        Add to cart
        <button className="btn btn-primary mx-3" onClick={() => {dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
        {/* <button className="btn btn-primary mx-3" onClick={() => {action.withdwawMoney(100)}}>-</button>
        Add to cart
        <button className="btn btn-primary mx-3" onClick={() => {action.depositeMoney(100)}}>+</button> */}
        <button className="btn btn-primary mx-3" onClick={() => {withdwawMoney(100)}}>-</button>
        Add to cart
        <button className="btn btn-primary mx-3" onClick={() => {depositeMoney(100)}}>+</button>
      </div>
    </>
  );
};

export default Shop;
