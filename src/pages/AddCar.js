import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import AddcarForm from '../components/molecules/AddcarForm/AddcarForm'
import Page from '../components/Page'

export default function AddCar() {
    return (
        <Page title="Dashboard: Add Car">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Add Car
                </Typography>

                <AddcarForm />
            </Container>
        </Page>
    )
}
