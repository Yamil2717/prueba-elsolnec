# El Sol Neighborhood Educational Center - Prueba practica

## 📌 Descripción
Esta aplicación en **Next.js 14** consume datos de JSONPlaceholder para listar usuarios y publicaciones, permitiendo ver detalles y comentarios. Implementa **React Query**, **Server Components**, **ShadCN** y estrategias de optimización para mejorar el rendimiento.

## 🚀 Instalación y Ejecución

### **1️⃣ Clonar el repositorio**
```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### **2️⃣ Instalar dependencias**
```sh
npm install
# o
pnpm install
# o
yarn install
```

### **3️⃣ Ejecutar el servidor en desarrollo**
```sh
npm run dev
```
Acceder a `http://localhost:3000`

---
## 📂 Estructura del Proyecto

```sh
/app
 ├── layout.tsx                 # Layout principal
 ├── page.tsx                   # Página de inicio (Lista de usuarios)
 ├── users/
 │   ├── page.tsx               # Página de usuarios
 │   ├── [id]/     
 │   │   ├── page.tsx           # Detalle de usuario
 ├── posts/
 │   ├── page.tsx               # Listado de publicaciones
 │   ├── [id]/
 │   │   ├── page.tsx           # Detalle de publicación
/components
 ├── ui/
 │   ├── avatar.tsx             # Componente Avatar de ShadCN
 │   ├── button.tsx             # Componente Button de ShadCN
 │   ├── card.tsx               # Componente Card de ShadCN
 │   ├── dropdown-menu.tsx      # Componente DropDown de ShadCN
 │   ├── input.tsx              # Componente Input de ShadCN
 │   ├── label.tsx              # Componente Label de ShadCN
 │   ├── navigation-menu.tsx    # Componente Navigation Menu de ShadCN
 │   ├── textarea.tsx           # Componente Textarea de ShadCN
 ├── Details/ 
 │   ├── PostDetail.tsx         # Componente de detalle de post y comentarios
 │   ├── UserDetail.tsx         # Componente de detalle de usuario
 ├── Lists/ 
 │   ├── PostsList.tsx          # Componente de lista de posts
 │   ├── UsersList.tsx          # Componente de lista de usuarios
 ├── ButtonBack.tsx             # Componente para reutilizar el botón de regresar
 ├── ErrorMessage.tsx           # Componente para reutilizar la visual al momento de que surja un error
 ├── Header.tsx                 # Menu Superior de la pagina
 ├── Loading.tsx                # Componente generico para reutilizar al cargar las peticiones
 ├── ThemeToggle.tsx            # Componente para cambiar entre modo oscuro o claro
/hooks
 ├── index.ts                   # Hook para importar/obtener todos los hooks disponibles
 ├── useAllPosts.ts             # Hook para obtener todos los datos de las publicaciones
 ├── useAllUsers.ts             # Hook para obtener todos los datos de los usuarios
 ├── useComments.ts             # Hook para obtener todos los comentarios de una publicación
 ├── usePost.ts                 # Hook para obtener datos de una publicación
 ├── useUser.ts                 # Hook para obtener datos de un usuario
/utils
 ├── index.ts                   # Archivo para exportar utils
/types
 ├── index.ts                   # Archivo para exportar todos lo modelos/tipados de las entidades
```

---
## 📌 Decisiones Arquitectónicas

### **✅ Uso de Server Components y SSR**
Se usaron **Server Components** en páginas estáticas como `/users` y `/posts` para mejorar la performance y evitar cargas innecesarias en el cliente. Para las páginas dinámicas (`[id]`), se optó por **Client Components** para manejar interactividad y React Query.

**Razón de la elección:**
- **Server Components** permiten renderizar contenido en el servidor, reduciendo la carga en el cliente y mejorando el tiempo de carga inicial.
- **SSR clásico** con `getServerSideProps` o `getStaticProps` con revalidación se usa para páginas que requieren datos frescos en cada solicitud o en intervalos específicos.

### **✅ Integración de TanStack Query**
Se usó **React Query** para:
- Manejo de caché y revalidación automática.
- Evitar múltiples re-fetchs innecesarios.
- Mejorar la experiencia de usuario con estado de carga y error controlados.

**Beneficios encontrados:**
- Menos re-renders.
- Cache de datos eficiente.
- Simplificación en el manejo de estados de carga y error.

### **✅ Estilos con ShadCN**
Se utilizó **ShadCN** para mejorar la apariencia de los componentes sin necesidad de configurar Tailwind desde cero. Componentes como `Button`, `Input`, `Card`, `DropDown`, `TextArea` y estilos de listas fueron personalizados.

### **✅ Optimización de Performance**
- **Dynamic imports con `next/dynamic`** para cargar componentes solo cuando son necesarios.
- **Manejo eficiente del estado** para evitar renders innecesarios.

---
## ✨ Mejoras Futuras
- Mejorar UI con más componentes de **ShadCN**.

---
## 📜 MIT Licencia
Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.