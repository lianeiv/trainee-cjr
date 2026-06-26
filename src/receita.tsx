export default function ReceitaPage() {
  const ingredientes = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ];

  const instrucoes = [
    {
      titulo: 'Beat the eggs',
      texto:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      titulo: 'Heat the pan',
      texto:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      titulo: 'Cook the omelette',
      texto:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      titulo: 'Add fillings',
      texto:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      titulo: 'Fold and serve',
      texto:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings.',
    },
    {
      titulo: 'Enjoy',
      texto:
        'Serve hot, with additional salt and pepper if needed.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4E8DC] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <img
          src="/omelete.png"
          alt="Omelette"
          className="w-full h-[300px] object-cover rounded-2xl"
        />

        <h1 className="text-5xl font-bold text-[#312E2C] mt-10">
          Simple Omelette Recipe
        </h1>

        <p className="text-[#5F564D] mt-6 leading-relaxed">
          An easy and quick dish, perfect for any meal. This
          classic omelette combines beaten eggs cooked to
          perfection, optionally filled with your choice of
          cheese, vegetables, or meats.
        </p>

        <div className="bg-[#FFF7FC] rounded-2xl p-8 mt-10">
          <h2 className="text-[#7B284F] font-bold text-xl">
            Preparation time
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-2 text-[#5F564D]">
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>

            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>

            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-4xl font-bold text-[#854632]">
            Ingredients
          </h2>

          <ul className="list-disc ml-6 mt-6 space-y-3 text-[#5F564D]">
            {ingredientes.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>
        </section>

        <hr className="my-12" />

        <section>
          <h2 className="text-4xl font-bold text-[#854632]">
            Instructions
          </h2>

          <ol className="mt-8 space-y-6">
            {instrucoes.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 text-[#5F564D]"
              >
                <span className="font-bold text-[#854632]">
                  {index + 1}.
                </span>

                <p>
                  <strong>{item.titulo}:</strong>{' '}
                  {item.texto}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <hr className="my-12" />

        <section>
          <h2 className="text-4xl font-bold text-[#854632]">
            Nutrition
          </h2>

          <p className="text-[#5F564D] mt-6">
            The table below shows nutritional values per
            serving without the additional fillings.
          </p>

          <div className="mt-8">
            <div className="flex justify-between py-4 border-b">
              <span>Calories</span>
              <span className="font-bold text-[#854632]">
                277kcal
              </span>
            </div>

            <div className="flex justify-between py-4 border-b">
              <span>Carbs</span>
              <span className="font-bold text-[#854632]">
                0g
              </span>
            </div>

            <div className="flex justify-between py-4 border-b">
              <span>Protein</span>
              <span className="font-bold text-[#854632]">
                20g
              </span>
            </div>

            <div className="flex justify-between py-4">
              <span>Fat</span>
              <span className="font-bold text-[#854632]">
                22g
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}