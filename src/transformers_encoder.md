# Transformer Encoder

El Transformer Encoder solamente es un componente de la arquitectura mostrada en [transformer](transformers.md). Este consiste en recibir secuencias y solamente encodificarlas a un espacio latente. 

El encoder solamente se ocupa de encodificar la secuencia de entrada, no genera ninguna secuencia de salida como la arquitectura completa.


##  BERT

El encoder ha sido demostrado que es sumamente util en tareas como clasificacion, preguntas y respuestas, y otras. Un claro ejemplo de esta aplicacion es BERT en NLP. BERT solamente es el bloque de encoder del transformer original con un par de modificaciones en el mecanismo de atencion.

# ViT

El Vision Transformer (ViT), el tema principal del curso, es en realidad un Transformer Encoder. ViT solamente se preocupa por encodificar una secuencia de datos en un espacio latente, conceptualmente muy similar a BERT.


Sin embargo, sabemos que el Transformer ocupa una secuencia como entrada, una imagen no es exactamente una secuencia de datos, salvo se considere cada pixel dentro de una imagen como secuencias, pero esta perspectiva se vuelve demasiado costosa computacionalmente.

La respuesta para traducir una imagen a secuencia es el Patch Embedding.

<div id="logo-container">
    <!-- Placeholder for logo-->
</div>
