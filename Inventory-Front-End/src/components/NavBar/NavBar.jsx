import React from 'react'
import { IconButton, GroupsIcon, AccountBoxIcon, WarehouseIcon, PendingActionsIcon, HomeIcon } from '@mui/material'
import style from './NavBar.css'

export default function NavBar() {
  return (
    <div className={style.top-nav}>
        <IconButton color="primary" aria-label="upload picture" component="label">
             Home<HomeIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
             Orders<PendingActionsIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
             Inventory<WarehouseIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
             Users<GroupsIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
             Profile<AccountBoxIcon />
        </IconButton>
    </div>
  )
}