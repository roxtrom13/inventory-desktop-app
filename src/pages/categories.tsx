import CategoryComponent from "../components/category-card";

export default function Categories() {
  return (
    <div class="px-12 pt-6 pb-28 h-screen">
      <div class="grid grid-cols-3 h-full gap-28">
        <div id="categories">
          <h2 class="mb-2 text-xl font-semibold text-slate-800">Categorías</h2>
          <button class="btn btn-primary mb-4 block">Agregar categoría</button>
          <div class="category-container">
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
            <CategoryComponent />
          </div>
        </div>
        <div id="subcategories">
          <h2 class="mb-2 text-xl font-semibold text-slate-800">Subcategorías</h2>
          <button class="btn btn-primary mb-4 block">Agregar subcategoría</button>
          <div class="category-container"></div>
        </div>
        <div id="products">
          <h2 class="mb-2 text-xl font-semibold text-slate-800">Productos</h2>
          <div class="category-container"></div>
        </div>
      </div>
    </div>
  );
}
