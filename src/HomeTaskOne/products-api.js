export default {
    fetchProducts: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                     id: '1', 
                     title: 'Samsung Galaxy S10',
                     type: 'device',
                     price: '800$',
                     quantity: '10',
                    },
                    {
                     id: '2', 
                     title: 'IPhone X',
                     type: 'device',
                     price: '600$',
                     quantity: '10',
                    },
                    {
                     id: '3', 
                     title: 'Платье',
                     type: 'clothes',
                     price: '50$',
                     quantity: '5',
                    }
                ])
            }, 1000)
        })
    }
}