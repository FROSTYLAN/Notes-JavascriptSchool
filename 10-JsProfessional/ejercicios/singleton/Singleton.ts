class Singleton {
    private static instance : Singleton;

    private constructor() {
        // Debe estar en privado para evitar la construccíón de mas instancias.
    }

    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    
}

export default Singleton;