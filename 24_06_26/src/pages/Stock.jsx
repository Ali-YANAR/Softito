import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementStock, decrementStock, addStockMovement } from "../store/stockSlice"

export default function Stock() {
  const dispatch = useDispatch()
  const stockItems = useSelector((state) => state.stock.items)
  const movements = useSelector((state) => state.stock.movements)

  return (
    <div className="tab-content stock-content">
      <p>Stok sayfası</p>
    </div>
  )
}
