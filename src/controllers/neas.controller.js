import Neas from '../models/Neas'

export const createNeas = async (req, res) => {
    const {full_name, a, e, i, om, w, ma} = req.body
    const newNeas = Neas ({full_name, a, e, i, om, w, ma});
    const neaSaved = await newNeas.save()
    res.status(201).json(neaSaved)
};


export const getNeas = async (req, res) => {
    const neas = await Neas.find();
    res.json(neas)
    
};


export const getNeasById = async (req, res) => {
    const neas = await Neas.findById(req.params.neasId);
    res.status(200).json(neas)
    
};


export const updateNeasById = async (req, res) => {
    const updatedNeas = await Neas.findByIdAndUpdate(req.params.neasId, req.body, {
        new: true
    });
    res.status(204).json(updatedNeas)    
};


export const deleteNeasById = async (req, res) => {
    const { neasId } = req.params;
    await Neas.findByIdAndDelete(neasId)
    res.status(204).json();
    
};   