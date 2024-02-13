import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

const LessonTextField = () => {

    const [value, setValue] = useState("");

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="name" />
                <TextField label="name" variant='outlined' />
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />
                <TextField label="name" variant='outlined' size='small' color='error' />
                <TextField label="name" variant='outlined' helperText="Lütfen isminizi giriniz" />
                <TextField label="Şifre" variant='outlined' type='password' />
                <TextField label="Şifre" variant='outlined' type='password' disabled />
                <TextField label="Şifre" variant='outlined' type='password' InputProps={{ readOnly: true }} />
                <TextField label="Toplam" variant='outlined' InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>TL</InputAdornment>
                    )
                }} />
            </Stack>
            <Stack direction="row" spacing={3}>
                <TextField
                type='password'
                label="Şifre"
                variant='outlined'
                helperText={!value ? "Lütfen şifrenizi giriniz" : "Şifreniz Girildi"}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                ></TextField>
            </Stack>
        </Stack>
    )
}

export default LessonTextField