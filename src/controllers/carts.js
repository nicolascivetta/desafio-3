import {request, response} from 'express'
import { addProductInCartService, createCartService, getCartByIdService } from '../services/carts.js';


export const getCartById = async(req = request, res = response)=>{
    try {
        const { cid } = req.params;
        const carrito = await getCartByIdService(cid);
        getCartByIdService

        if(carrito)
            return res.json({carrito});

        return res.status(404).json({msg:`El carrito con id ${cid} no existe`});
    } catch (error) {
        return res.status(500).json({msg:'Hablar con un administrador'});
        
    }
}

export const createCart = async(req = request, res = response)=>{
    try {
        const carrito = await createCartService();
        return res.json({ msg:'Carrito creado', carrito});
    } catch (error) {
        console.log('createCart -> ', error);
        return res.status(500).json({msg:'Hablar con un administrador'});
        
    }
}

export const addProductInCart = async(req = request, res = response)=>{
    try {
        const {cid, pid} = req.params;

        const carrito = await addProductInCartService(cid, pid);

        if(!carrito)
            return res.status(404).json({msg:`El carrito con id ${cid} no existe`});

        return res.json({msg: 'Carrito actualizado', carrito});
    } catch (error) {
        return res.status(500).json({msg:'Hablar con un administrador'});
        
    }
}