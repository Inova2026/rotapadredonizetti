# Imagens do Site - Rota Padre Donizetti

Esta pasta contém todas as imagens utilizadas no site. Você pode substituir qualquer imagem mantendo o mesmo nome de arquivo.

## 📁 Estrutura de Imagens

### Logo
- `logo.png` - Logo principal do site (usada no navbar e footer)
  - Tamanho recomendado: 200x200px ou maior
  - Formato: PNG com fundo transparente

### Hero Section (Página Inicial)
- `hero-peregrinos.png` - Imagem principal da hero section
  - Tamanho recomendado: 1920x1080px (16:9)
  - Formato: PNG ou JPG
  - Dica: Use imagens com bom contraste para o texto sobrepor

### Sobre (História do Padre Donizetti)
- `padre-donizetti.jpg` - Foto histórica do Padre Donizetti
  - Tamanho recomendado: 800x1000px (4:5)
  - Formato: JPG

### Descubra (Cards)
- `card-caminho.jpg` - Imagem para o card "O Caminho"
  - Tamanho recomendado: 600x400px (3:2)
  
- `card-hospedagem.jpg` - Imagem para o card "Hospedagem"
  - Tamanho recomendado: 600x400px (3:2)
  
- `card-credenciais.jpg` - Imagem para o card "Credenciais"
  - Tamanho recomendado: 600x400px (3:2)

### Hospedagem (Pousadas)
- `pousada-1.jpg` - CMS Plaza Hotel
- `pousada-2.jpg` - VM Estacionamento e Cantina
- `pousada-3.jpg` - Pousada da Vovó
- `pousada-4.jpg` - Hotel São Simão
- `pousada-5.jpg` - Pousada Alfa
- `pousada-6.jpg` - Albergue Peregrino
  - Tamanho recomendado: 800x600px (4:3)
  - Formato: JPG

### Loja (Produtos)
- `produto-1.jpg` - Camiseta Peregrino
- `produto-2.jpg` - Credencial Oficial
- `produto-3.jpg` - Bastão de Peregrinação
- `produto-4.jpg` - Medalha Padre Donizetti
- `produto-5.jpg` - Boné Rota Padre Donizetti
- `produto-6.jpg` - Garrafa Térmica
- `produto-7.jpg` - Livro Vida de Padre Donizetti
- `produto-8.jpg` - Terço Especial
  - Tamanho recomendado: 600x600px (1:1)
  - Formato: JPG

### CTA Section
- `cta-background.jpg` - Imagem de fundo da seção de chamada para ação
  - Tamanho recomendado: 1920x600px (21:9)
  - Formato: JPG

## 🎨 Cores da Marca (da Logo)

```css
/* Cores principais extraídas da logo */
--azul-escuro: #001350;    /* Texto principal */
--azul-claro: #21bdf1;     /* Detalhes do círculo */
--azul-medio: #0a3d8f;     /* Variação intermediária */
--branco: #ffffff;
--cinza-claro: #f5f7fa;
```

## 📝 Como Substituir Imagens

1. **Prepare sua imagem** no tamanho e formato recomendado
2. **Renomeie** para o nome do arquivo que deseja substituir
3. **Copie** para esta pasta (`/public/images/`)
4. **Substitua** o arquivo existente
5. **Recarregue** o site para ver as alterações

## ⚠️ Dicas Importantes

- Mantenha os nomes de arquivo exatamente como estão
- Use imagens otimizadas para web (tamanho < 500KB quando possível)
- Prefira JPG para fotos e PNG para logos/gráficos
- Imagens com pessoas reais da rota são mais autênticas
- Teste como a imagem fica com o texto sobreposto (gradientes escuros são aplicados)

## 🔄 Rebuild Necessário

Após substituir imagens, execute o rebuild do site:

```bash
cd /mnt/okcomputer/output/app
npm run build
```
