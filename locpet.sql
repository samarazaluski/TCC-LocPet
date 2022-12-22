-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Nov-2022 às 02:16
-- Versão do servidor: 8.0.30
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pet`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `anuncios`
--

CREATE TABLE `anuncios` (
  `id` int NOT NULL,
  `petId` int DEFAULT NULL,
  `tipoanuncioId` int DEFAULT NULL,
  `perfilId` int DEFAULT NULL,
  `locationId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `locations`
--

CREATE TABLE `locations` (
  `id` int NOT NULL,
  `position` text COLLATE utf8mb4_general_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfils`
--

CREATE TABLE `perfils` (
  `id` int NOT NULL,
  `foto` text COLLATE utf8mb4_general_ci,
  `celular` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `notificacao` char(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pets`
--

CREATE TABLE `pets` (
  `id` int NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `foto` text COLLATE utf8mb4_general_ci,
  `racapetId` int DEFAULT NULL,
  `sexopetId` int DEFAULT NULL,
  `tipopeloId` int DEFAULT NULL,
  `tipopetId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `racapets`
--

CREATE TABLE `racapets` (
  `id` int NOT NULL,
  `descRaca` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221117185725-create-location.js'),
('20221117201648-create-user.js'),
('20221117202425-create-perfil.js'),
('20221117204501-create-raca-pet.js'),
('20221117204536-create-sexo-pet.js'),
('20221117204600-create-tipo-pelos.js'),
('20221117204733-create-tipo-pet.js'),
('20221117205425-create-tipo-anuncio.js'),
('20221117210729-create-pet.js'),
('20221117211038-create-anuncio.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sexopets`
--

CREATE TABLE `sexopets` (
  `id` int NOT NULL,
  `sexoPet` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipoanuncios`
--

CREATE TABLE `tipoanuncios` (
  `id` int NOT NULL,
  `tipoAnuncio` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipopelos`
--

CREATE TABLE `tipopelos` (
  `id` int NOT NULL,
  `tipoPelos` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipopets`
--

CREATE TABLE `tipopets` (
  `id` int NOT NULL,
  `tipoPet` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `senha` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `email`, `senha`, `createdAt`, `updatedAt`) VALUES
(1, 'heannareis@gmail.com', '123', '2022-11-18 12:46:05', '2022-11-18 12:46:05'),
(2, 'thalys@gmail.com', '123', '2022-11-21 07:18:37', '2022-11-21 07:18:37'),
(3, 'teste@teste.com', '123', '2022-11-21 07:32:48', '2022-11-21 07:32:48');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `petId` (`petId`),
  ADD KEY `tipoanuncioId` (`tipoanuncioId`),
  ADD KEY `perfilId` (`perfilId`),
  ADD KEY `locationId` (`locationId`);

--
-- Índices para tabela `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `perfils`
--
ALTER TABLE `perfils`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Índices para tabela `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `racapetId` (`racapetId`),
  ADD KEY `sexopetId` (`sexopetId`),
  ADD KEY `tipopeloId` (`tipopeloId`),
  ADD KEY `tipopetId` (`tipopetId`);

--
-- Índices para tabela `racapets`
--
ALTER TABLE `racapets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `sexopets`
--
ALTER TABLE `sexopets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipoanuncios`
--
ALTER TABLE `tipoanuncios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipopelos`
--
ALTER TABLE `tipopelos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipopets`
--
ALTER TABLE `tipopets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `perfils`
--
ALTER TABLE `perfils`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `racapets`
--
ALTER TABLE `racapets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `sexopets`
--
ALTER TABLE `sexopets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipoanuncios`
--
ALTER TABLE `tipoanuncios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipopelos`
--
ALTER TABLE `tipopelos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipopets`
--
ALTER TABLE `tipopets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `anuncios_ibfk_1` FOREIGN KEY (`petId`) REFERENCES `pets` (`id`),
  ADD CONSTRAINT `anuncios_ibfk_2` FOREIGN KEY (`tipoanuncioId`) REFERENCES `tipoanuncios` (`id`),
  ADD CONSTRAINT `anuncios_ibfk_3` FOREIGN KEY (`perfilId`) REFERENCES `perfils` (`id`),
  ADD CONSTRAINT `anuncios_ibfk_4` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`);

--
-- Limitadores para a tabela `perfils`
--
ALTER TABLE `perfils`
  ADD CONSTRAINT `perfils_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`racapetId`) REFERENCES `racapets` (`id`),
  ADD CONSTRAINT `pets_ibfk_2` FOREIGN KEY (`sexopetId`) REFERENCES `sexopets` (`id`),
  ADD CONSTRAINT `pets_ibfk_3` FOREIGN KEY (`tipopeloId`) REFERENCES `tipopelos` (`id`),
  ADD CONSTRAINT `pets_ibfk_4` FOREIGN KEY (`tipopetId`) REFERENCES `tipopets` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
