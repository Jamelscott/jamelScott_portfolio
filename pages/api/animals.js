export default function animals(req, res){
    const animals = ["cat", "dog", "capybara", "ostridge", "pangolin", "bull", "guine pig" ]

    const randomAnimal = animals[Math.floor(Math.random()*animals.length)]
    res.status(200).json({randomAnimal})
}