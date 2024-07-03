const { createApp } = Vue
const isValidInput = (char) => /\d/.test(char);

createApp({
  data() {
    return {
      activeIndex: null,
      creatorsForm: false,
      accordionItems: [
        { title: 'Qual pessoa pode participar desse programa?',
          content: 'Não! Apenas funcionários da L’oreal Grande Público.' },
        { title: 'As aulas e as atividades extras aconteceram fora do horário de trabalho?',
          content: 'Não, todos o conteúdo e qualquer ação necessária, será realizada dentro do horário habitual de trabalho.' },
        { title: 'Promotores contratados por agência podem participar?',
          content: 'Não. O programa é para quem já é contratado L’Oreal ' },
        { title: 'Como faço para me inscrever?',
          content: 'Acesso formulário, faça sua inscrição de 12 a 27 de Julho de 2024.' },
        { title: 'Quantos pessoas serão selecionadas?',
          content: 'Serão 15 selecionados nessa fase do programa. Boa sorte!' },
        { title: 'Quais serão os critérios de seleção?',
          content: 'Ter um perfil ativo acima de 500 seguidores, ter publicação média de 2 conteúdos mensais, criatividade e qualidade técnica dos conteúdos.' },
        { title: 'Quais serão os benefícios de me tornar um/a Beauty Creator?',
          content: 'Receber reconhecimento dentro da L’oreal.<br> Ganhar autoridade e presença nas redes sociais. Receber prêmios a cada missão cumprida dentro do programa.' },
      ],
      items: [
        {
          numbers: "assets/mask-boy.png",
          title: "Produtos",
          description: "Já pensou em aprender sobre criação de conteúdo com um super<br class='d-none d-md-block'> time da <strong>L'Oreal</strong> Grande Público? <br/> <br/> Nosso programa exclusivo é projetado para equipar você com as ferramentas e técnicas necessárias para se destacar no mundo digital<br class='d-none d-md-block'> e impulsionar resultados impactantes através de conteúdo envolvente.",
        },
      ],
      cards: [
        {
          numbers: "01",
          description: "Posicionamento estratégico e performance",
        },
        {
          numbers: "02",
          description: "Identidade visual <br> no conteúdo",
        },
        {
          numbers: "03",
          description: "Contando história <br> através  de ganchos",
        },
        {
          numbers: "04",
          description: "Técnicas de edição de vídeos, takes e cortes",
        },
        {
          numbers: "05",
          description: "Como identificar e metrificar seus resultados",
        },
      ],
      itemsWork: [
        {
          image: "assets/Group544.png",
          description: "<strong>Educação de Ponta:</strong> Participe de aulas e sessões de treinamento virtuais com profissionais renomados no mercado de influência e marketing de conteúdo.<br><br><strong>Educação de Ponta:</strong> Participe de aulas e sessões de treinamento virtuais com profissionais renomados no mercado de influência e marketing de conteúdo.<br><br><strong>Reconhecimento:</strong> Seja uma das 15 pessoas escolhidas para uma graduação especial, com a oportunidade de receber prêmios por engajamento, criatividade e qualidade técnica dos seus conteúdos!"
        }
      ],
      itemsMiniCard: [
        { content: "<h3>Inscrição</h3> Programa Exclusivo para funcionários da L'Oreal Grande Público - comece fazendo sua <a data-bs-toggle='modal' data-bs-target='#exampleModal'><strong>inscrição</strong></a>." },
        { content: '<h3>Imersão</h3> De julho a novembro, mergulhe em uma série de atividades educativas, desde a estratégia de conteúdo até as técnicas de edição e iluminação.' },
        { content: '<h3>Desafios<br> de Criação</h3> Aplique o aprendizado em desafios práticos, criando conteúdos que serão avaliados por critérios de criatividade e engajamento.' },
        { content: '<h3>Black Friday</h3> Use suas novas habilidades para maximizar as vendas e o engajamento durante a Black Friday e prepare-se para uma avaliação final em dezembro.' },
      ],
      tutors: [
        {
          image: "assets/creators-1.jpg",
          name: "Gabrielle Coutinho",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem  nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/creators-2.jpg",
          name: "Leticia Imai",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/creators-3.jpg",
          name: "Joicy Eleiny",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/creators-4.jpg",
          name: "José Marinho",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
      ],
      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        perfil: "",
        origin: "aliexperts",
        date_subscription: "",
        specialities: [],
        validacaoRedes: [
          { socialMedia: '', link: '' }
        ]
      },
      passwordStrength: '',
      showingTooltip: false,
      isLoading: false,
      success: '',
      error: '',
      selectedCount: 0,      
      selectedSocialMedia: '',
      socialMediaInput: '',
      showAllFields: true,
      
      vertical: [
        { name: "Beleza", id: 263 },
        { name: "Casa", id: 306 },
        { name: "Decoração", id: 307 },
        { name: "Esporte", id: 305 },
        { name: "Fitness", id: 264 },
        { name: "Games", id: 362 },
        { name: "Moda", id: 323 },
        { name: "Tecnologia", id: 368 },
    ],    
    }
  },
 
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

    formatTelefone() {
      this.formData.phone = this.formData.phone.replace(/\D/g, ''); 
      let phoneNumber = this.formData.phone;
    
      if (phoneNumber.length >= 2) {
        this.formData.phone = `(${phoneNumber.substring(0, 2)}`;
      }
    
      if (phoneNumber.length > 2) {
        this.formData.phone += `) ${phoneNumber.substring(2, 7)}`;
      }
    
      if (phoneNumber.length > 7) {
        this.formData.phone += `-${phoneNumber.substring(7, 11)}`;
      }
    },

    checkPasswordStrength() {
      const password = this.formData.password;
      if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Forte';
      } else if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Média';
      } else {
        this.passwordStrength = 'Fraca';
      }
    },
    
    showTooltip() {
      this.showingTooltip = true;
    },

    hideTooltip() {
      this.showingTooltip = false;
    },
  
    updateSelectedCount() {
      this.selectedCount = this.formData.specialities.length;
    },

    formLogin() {
      this.error = "";
      this.success = "";
      this.isLoading = true;
    
      fetch('https://creators.llc/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            this.error = 'Ocorreu um erro no login. Por favor, verifique se o e-mail e senha estão corretos.';
          }
          this.isLoading = false;
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          if(data.data.user && data.data.user.date_subscription == null){
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
            this.formData.date_subscription = formattedDate;

            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }else{
            this.isLoading = false;
            this.success = "E-mail já inscrito!";
          }
        }
      })
      .catch(error => {
        this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
      });
    },
    
    formUpdateUser(token, id) {
      this.formData.validacaoRedes.forEach(element => {
        this.formData[element.socialMedia] = this.getBaseLink(element.socialMedia) + element.link;
      });
      console.log(this.formData)
      fetch('https://creators.llc/api/v1/users/'+id, {
          method: 'PUT',
          body: JSON.stringify(this.formData),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao atualizar usuário');
          }
          return response.json(); 
      })
      .then(data => {
          if(data.error) {
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
              this.isLoading = false;
          } else if(!data.error) {
            this.success = 'Inscrição efetuada com sucesso!';
            this.isLoading = false;

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
      })
      .catch(error => {
          console.error('Erro na solicitação:', error);
      });
    },

    formForgot(){
      if(this.formData.email == "") {
        this.error = 'Preencha um email válido';
      }else{
        const requestBody = {
          email: this.formData.email
        };

        fetch('https://creators.llc/api/password/create', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }
            return response.json();
        })
        .then(data => {
          if (data.data && data.data.message) {
              const successMessage = data.data.message;
              this.success = successMessage;
          } else {
              throw new Error('Resposta do servidor incompleta ou sem mensagem');
          }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
      }
    },

    formCreateUser() {
      this.error = "";
      this.success = "";

      this.validadeRedes()

      if(this.selectedCount >= 2 && this.validadeRedes()) {
        this.isLoading = true;

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        this.formData.date_subscription = formattedDate;

        fetch('https://creators.llc/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(this.formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }
            return response.json();
        })
          .then(data => {
            
          if(data.error) {
            if (data.error.email) {
              if (Array.isArray(data.error.email) && data.error.email.length > 0) {
                const errorMessage = data.error.email[0];
                this.error = errorMessage;
              }
            }else{
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
            }
            this.isLoading = false;
          } else {
            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }
        })
      }else{
        if(this.selectedCount < 1) {
          this.error = 'É necessário selecionar no mínimo 2 verticais do seu conteúdo.';
        }else {
          this.error = 'É necessário selecionar no mínimo 1 rede.';
        }
      }
    },

    validadeRedes() {
      if(Array.isArray(this.formData.validacaoRedes) && this.formData.validacaoRedes.length > 0) {
        const primeiroElemento = this.formData.validacaoRedes[0];
        const socialMediaVazia = primeiroElemento.socialMedia.trim() === '';
        const linkVazio = primeiroElemento.link.trim() === '';
        
        if (socialMediaVazia || linkVazio) {
          return false
          
        } 
      } else {
          return false
      }
      return true
    },

    toggleReturn() {
      this.error = "";
      this.success = "";
    },

    toggleFieldsVisibility() {
      this.error = "";
      this.success = "";
      this.showAllFields = !this.showAllFields;
    },

    addSocialMedia() {
      if (this.formData.validacaoRedes.length < 2) {
        this.formData.validacaoRedes.push({ socialMedia: '', link: '' });
      }
    },

    removeSocialMedia() {
      if (this.formData.validacaoRedes.length > 1) {
        this.formData.validacaoRedes.pop();
      }
    },

    getBaseLink(socialMedia) {
      if (socialMedia === 'instagram') {
        return 'https://www.instagram.com/';
      } else if (socialMedia === 'youtube') {
        return 'https://www.youtube.com/';
      } else if (socialMedia === 'tikTok') {
        return 'https://www.tiktok.com/';
      }
      return '';
    },
  },

  computed: {
    selectedVerticals() {
      const selectedIds = this.formData.specialities.map(Number);
      return this.vertical.filter((v) => selectedIds.includes(v.id));
    },
    isValid() {
      const vertical = this.selectedCount >= 2;
      const redes = this.formData.validacaoRedes.length >= 1;


      return [vertical, redes];
    }
  },

  
}).mount('#app')